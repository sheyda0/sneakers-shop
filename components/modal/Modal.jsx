export default function Modal({
  children,
  cln,
  backdropCln,
  onModalClick,
  handleCloseModal,
  isOpen,
}) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 bg-zinc-600 opacity-70 w-full z-[101] transition-all duration-[0.4s] ${
          isOpen ? "h-full" : "h-0"
        } ${backdropCln}`}
        onClick={handleCloseModal}
      ></div>
      <div
        onClick={onModalClick}
        className={`${cln ? cln : ""} ${
          isOpen ? "translate-y-0" : "translate-y-[-200%]"
        } transition-all duration-[0.4s] inset-0 fixed shadow-lg round bg-white top-[5%] left-[1.7rem] 3xl:left-[25%] md:left-[19%] w-[89vw] md:w-[60rem] h-[81vh] md:h-[60vh] z-[102]`}
      >
        {children}
      </div>
    </>
  );
}
