const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColor = () => {
  return (
    <div>
      <p>색상을 선택하라</p>

      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColor;
