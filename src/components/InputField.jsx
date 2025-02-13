import React from "react";

const InputField = ({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  options = [],
}) => (
  <div className="flex flex-col gap-1 w-full">
    <label htmlFor={name} className="font-semibold">
      {label}
    </label>
    {type === "select" ? (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-md p-2 outline-none bg-slate-50 w-full"
      >
        <option value="">Choose</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded-md p-2 outline-none bg-slate-50 w-full"
        required
      />
    )}
  </div>
);

export default InputField;
