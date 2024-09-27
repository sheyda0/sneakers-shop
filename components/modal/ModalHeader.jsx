import CloseModalBtn from "../buttons/CloseModalBtn";

const ModalHeader = ({ title, handleClose }) => {
  return (
    <header className="size-chart-header flex w-full items-center justify-between">
      <h1 className="size-chart-title" datarole="title">
        {title}
      </h1>

      <CloseModalBtn onClick={handleClose} />
    </header>
  );
};

export default ModalHeader;
