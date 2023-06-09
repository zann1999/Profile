import { useEffect, useState } from "react";
import styles from "./navbar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Navbar() {
  const [index, setindex] = useState(0);
  useEffect(() => {
    console.log("click!" + index);

    const underlines = document.querySelectorAll("#underline");
    console.log(underlines);
    for (let i = 0; i < underlines.length; i++) {
      underlines[i].style.transform = "translate3d(" + index * 100 + "%,0,0)";
    }
  }, [index]);

  return (
    <div className={cx("nav")}>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <h1>PROFILE</h1>
        </div>
      </div>
      <div className={cx("navbar")}>
        <div id="underline" className={cx("underline")}></div>
        <div id="underline" className={cx("underline")}></div>
        <div id="underline" className={cx("underline")}></div>

        <a onClick={() => setindex(0)} className={cx("button")}>
          <div className={cx("wrapper2")}>
            <h1>Home</h1>
          </div>
        </a>
        <a onClick={() => setindex(1)} className={cx("button")}>
          <div className={cx("wrapper2")}>
            <h1>Sản Phẩm</h1>
          </div>
        </a>

        <a onClick={() => setindex(2)} className={cx("button")}>
          <div className={cx("wrapper2")}>
            <h1>Công Nghệ</h1>
          </div>
        </a>
        <a onClick={() => setindex(3)} className={cx("button")}>
          <div className={cx("wrapper2")}>
            <h1>Giới Thiệu</h1>
          </div>
        </a>
        <a onClick={() => setindex(4)} className={cx("button")}>
          <div className={cx("wrapper2")}>
            <h1>Liên Hệ</h1>
          </div>
        </a>
      </div>
      <div className={cx("avatar")}>Avatar</div>
    </div>
  );
}

export default Navbar;
