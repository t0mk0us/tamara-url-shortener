const Dropdown = ({ label, selectclass, optionclass, value, options, onChange }) => {

    return (
   
      <label>
   
        {label}
   
        <select class={selectclass} value={value} onChange={onChange}>
   
          {options.map((option) => (
   
            <option class={optionclass} value={option.value}>{option.label}</option>
   
          ))}
   
        </select>
   
      </label>
   
    );
   
   };

   export default Dropdown;