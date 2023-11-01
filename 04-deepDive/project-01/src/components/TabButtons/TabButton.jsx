// export default function TabButton({ children,isSelected, onClick  }) {
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      {/* <button className={isSelected ? "active" : ""} onClick={onClick}> */}
      {/* Note below is same as above but it is a more advanced React pattern to pass the onClick call to the function in the component as a prop */}
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
