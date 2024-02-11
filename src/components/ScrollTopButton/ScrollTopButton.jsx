import './ScrollTopButton.scss';

const ScrollTopButton = () => {
    const handleTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }
  return (
    <button className="scrollTopButton" onClick={handleTop}>
        <i className="fa-solid fa-angles-up"></i>
    </button>
  )
}

export default ScrollTopButton