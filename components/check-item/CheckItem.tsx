const CheckItem = ({ item, onCheck }) => {

    
  return (
    <div className="check-item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onCheck(item.id)}
      />
      <span>{item.text}</span>
    </div>
  );
}
export default CheckItem;