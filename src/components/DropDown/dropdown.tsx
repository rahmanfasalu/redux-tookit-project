import { useFilteredData } from 'hooks/useFilteredData';
import useOnClickOutside from 'hooks/useOutsideClick';
import { IBreed } from 'interface/breed.interface';
import React, { ComponentPropsWithoutRef, ReactNode, useMemo, useState } from 'react';
import styled from "styled-components"



 /**
  * Type utility for filtering non object keys
  */
export type NonObjectKeys<T> = { [K in keyof T]: T[K] extends object ? never : K }[keyof T];

/**
  * Dropdown prop type 
  */
type IProps<T> = Omit<ComponentPropsWithoutRef<'input'>, "type"> & {
  options:T[];
  titleField:NonObjectKeys<T>;
  searchBy:NonObjectKeys<T>;
  descriptionField?:NonObjectKeys<T>;
  maybeOnChange?:(item:T)=>void;
  defaultVal:T | undefined;
}

type  validKeyType = number | string;

/** 
  * Auto suggest dropdown component 
  */
function DropDown<T extends {id:string}>(props:IProps<T>) {

  const {options,titleField,descriptionField, searchBy,maybeOnChange,defaultVal, ...inputProps} = props;
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(defaultVal ? defaultVal[titleField] as string : '');

  const {filteredItems } = useFilteredData<T>(options,searchBy,query);
  const divRef = React.useRef<HTMLDivElement>(null);
  
  // use outside click
  useOnClickOutside(divRef,(event: MouseEvent | TouchEvent)=>{
    setOpen(false);
  });

  const toggleDropdown = (status:boolean) => {
    setOpen(status);
  };

  const openDropDown = ()=>{
    if(!open){
       toggleDropdown(true);
    }
  }
  
  const handleSelect = (item:T)=>{
    setQuery(item[titleField] as string);
    maybeOnChange && maybeOnChange(item);
    toggleDropdown(false);
  }
 
  //
  const memoizedOptions = useMemo(() => {
    return <StyledOptionWrapper> 
           {filteredItems.map((option:T) => (
            <div
              key={option.id} 
              onClick={() =>handleSelect(option)}
              className="option"
              tabIndex={0}
            > 
             <div className='dot' style={{
                background:`#${(Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'))}`}}>
              </div>
             <div className='info'> 
                <div className="title"> {option[titleField] as ReactNode} </div>
                <div className="description"> {descriptionField && option[descriptionField] as ReactNode} </div>
              </div>
            </div>
          ))}
        </StyledOptionWrapper>
  }, [filteredItems]);
  
  return (
    <StyledDropDown ref={divRef}>
      <div> 
          <input type={"text"} {...inputProps} 
                onClick={openDropDown} 
                value={query || ''}
                onChange={(e)=>setQuery(e.target.value)} 
          />
          <i className={`arrow ${open ? 'up' : 'down'}`}   onClick={()=>toggleDropdown(!open)}></i>
      </div>
        {open ? memoizedOptions : ''}
    </StyledDropDown>
  );
};

/** 
 * Styled compoents
*/
const StyledDropDown = styled.div`
   min-width: 200px;
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-left: -30px;
    cursor: pointer;
  }
  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  input {
    border-radius:20px;
    background:${props => props.theme.colors.default};
    color:#000;
    border: none;
    outline: none;
    font-style: normal;
    height: 20px;
    width:calc(100% - 33px);
    padding: 6px 16px;
    font-size: 20px;
    height: 48px;

    &:focus{
      background:${props => props.theme.colors.focused};
    }
  }
`;


const StyledOptionWrapper = styled.div`
    max-height: 300px;
    display: block;
    overflow: auto;
    box-shadow: 0px 4px 30px rgb(0 0 0 / 10%);
    border-radius: 10px;
    margin-top: 5px;
    .option{
      display: flex;
      align-items: center;
      gap: 10px;
      padding:11px 15px;  
      line-height: 24px;
      .dot{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        min-width: 10px;
      }
      .info{
         display: flex; 
         align-items: flex-start;
         flex-direction: column;
         max-width: calc(100% - 30px);
         gap: 5px;
        
        .title,.description {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 100%;
          font-size: 20px;
          line-height: 24px;
        }
        .title {
          font-weight: 400;
        }
        .description{
           font-weight: 300;
        }
      }
  
      &:hover{
        background:${props => props.theme.colors.hover};
      }
      
    }
`;
export default DropDown;
