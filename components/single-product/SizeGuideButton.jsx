const SizeGuideButton = ({ onClick }) => {
  return (
    <button className="flex items-center" onClick={onClick}>
      <span className="mr-[-0.5rem]">
        <svg
          height="45px"
          width="45px"
          version="1.1"
          id="图层_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 40 40"
          enable-background="new 0 0 40 40"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  fill="#231815"
                  d="M16.6,28.1c-0.4,0-0.8-0.2-1.1-0.4l-3.2-3.2c-0.3-0.3-0.4-0.7-0.4-1.1s0.2-0.8,0.4-1.1l10-10
				c0.6-0.6,1.6-0.6,2.1,0l3.2,3.2c0.3,0.3,0.4,0.7,0.4,1.1s-0.2,0.8-0.4,1.1l-10,10C17.3,27.9,17,28.1,16.6,28.1z M23.4,12.9
				c-0.1,0-0.3,0.1-0.4,0.1l-10,10c-0.1,0.1-0.1,0.2-0.1,0.4s0.1,0.3,0.1,0.4l3.2,3.2c0.2,0.2,0.5,0.2,0.7,0l10-10
				c0.1-0.1,0.1-0.2,0.1-0.4s-0.1-0.3-0.1-0.4l-3.2-3.2C23.7,13,23.6,12.9,23.4,12.9z"
                />
              </g>
              <g>
                <path
                  fill="#231815"
                  d="M20.4,18.6c-0.1,0-0.3,0-0.4-0.1l-1.5-1.5c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l1.5,1.5
				c0.2,0.2,0.2,0.5,0,0.7C20.6,18.5,20.5,18.6,20.4,18.6z"
                />
              </g>
              <g>
                <path
                  fill="#231815"
                  d="M18.1,20.9c-0.1,0-0.3,0-0.4-0.1l-1.5-1.5c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l1.5,1.5
				c0.2,0.2,0.2,0.5,0,0.7C18.4,20.8,18.2,20.9,18.1,20.9z"
                />
              </g>
              <g>
                <path
                  fill="#231815"
                  d="M15.8,23.2c-0.1,0-0.3,0-0.4-0.1l-1.5-1.5c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l1.5,1.5
				c0.2,0.2,0.2,0.5,0,0.7C16.1,23.1,15.9,23.2,15.8,23.2z"
                />
              </g>
              <g>
                <path
                  fill="#231815"
                  d="M22.7,16.3c-0.1,0-0.3,0-0.4-0.1l-1.5-1.5c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l1.5,1.5
				c0.2,0.2,0.2,0.5,0,0.7C22.9,16.3,22.8,16.3,22.7,16.3z"
                />
              </g>
            </g>
          </g>
        </svg>
      </span>

      <span className="text-[0.875rem] underline">Size Guide</span>
    </button>
  );
};

export default SizeGuideButton;
