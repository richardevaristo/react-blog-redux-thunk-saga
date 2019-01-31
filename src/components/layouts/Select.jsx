import React from 'react'

const Select = ({
  name, 
  label,
  changeEvent,
  options,
}) => {
  return (
    <React.Fragment>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
            <label htmlFor={name} className="label">{label}</label>
        </div>
        <div className="field-body">
            <div className="field">
              <div className="select is-fullwidth">
                <select onChange={changeEvent} name={name}>
                  <option>Select Category...</option>
                  {
                    options.map((option, index) => 
                      <option key={index} value={option}>{option}</option>  
                    )
                  }
                </select>
              </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Select