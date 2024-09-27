const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="97"
        height="97"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "rgba(255, 255, 255, 0)",
        }}
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <circle fill="#7179f6" r="10" cy="50" cx="84">
            <animate
              begin="0s"
              keySplines="0 0.5 0.5 1"
              values="10;0"
              keyTimes="0;1"
              calcMode="spline"
              dur="0.3676470588235294s"
              repeatCount="indefinite"
              attributeName="r"
            ></animate>
            <animate
              begin="0s"
              values="#7179f6;#7179f6;#7179f6;#7179f6;#7179f6"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="discrete"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="fill"
            ></animate>
          </circle>
          <circle fill="#7179f6" r="10" cy="50" cx="16">
            <animate
              begin="0s"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              values="0;0;10;10;10"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="spline"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="r"
            ></animate>
            <animate
              begin="0s"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              values="16;16;16;50;84"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="spline"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="cx"
            ></animate>
          </circle>
          <circle fill="#7179f6" r="10" cy="50" cx="50">
            <animate
              begin="-0.3676470588235294s"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              values="0;0;10;10;10"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="spline"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="r"
            ></animate>
            <animate
              begin="-0.3676470588235294s"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              values="16;16;16;50;84"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="spline"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="cx"
            ></animate>
          </circle>
          <circle fill="#7179f6" r="10" cy="50" cx="84">
            <animate
              begin="-0.7352941176470588s"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              values="0;0;10;10;10"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="spline"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="r"
            ></animate>
            <animate
              begin="-0.7352941176470588s"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              values="16;16;16;50;84"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="spline"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="cx"
            ></animate>
          </circle>
          <circle fill="#7179f6" r="10" cy="50" cx="16">
            <animate
              begin="-1.102941176470588s"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              values="0;0;10;10;10"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="spline"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="r"
            ></animate>
            <animate
              begin="-1.102941176470588s"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              values="16;16;16;50;84"
              keyTimes="0;0.25;0.5;0.75;1"
              calcMode="spline"
              dur="1.4705882352941175s"
              repeatCount="indefinite"
              attributeName="cx"
            ></animate>
          </circle>
          <g></g>
        </g>
      </svg>
    </div>
  );
};

export default Loading;
