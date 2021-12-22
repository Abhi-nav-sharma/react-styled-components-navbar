const ToolBar = ({ children }) => {
  console.log(children);
  return (
    <div
      style={{
        background: "skyBlue",
        height: "30px",
        padding: "10px",
        color: "white"
      }}
    >
      {children[0]}
      <div style={{ float: "right", margin: "5px 20px" }}>{children[3]}</div>
      <div style={{ float: "right", margin: "5px 20px" }}>{children[2]}</div>
      <div style={{ float: "right", margin: "5px 20px" }}>{children[1]}</div>
    </div>
  );
};
export default ToolBar;
