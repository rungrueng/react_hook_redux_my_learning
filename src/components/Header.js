import React from "react";
import { Link } from "react-router-dom";
import TimerCountDown from "./flip_countdown/timecountdown";

export default function Header() {

  // const [date, setstate] = useState(new Date())

  // useEffect(() => {
  //   const timerID = setInterval(() => tick(), 1000);
  //   return () => {
  //     clearInterval(timerID)
  //   };
  // }, [])

  // const tick = () => {
  //   setstate(new Date());
  // }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 text-left mt-2 mb-2">
          <h1 className="text-success">
            <img style={{ height: 70 }} src="/images/logo/karabada_logo.png" alt="" />{" "}
              Shopping Online{" "}
          </h1>
        </div>
        <div className="col-md-4 text-right mt-3">
          <ul className="list-inline">
            <li className="list-inline-item title"><Link className="text-success" to="/">หน้าหลัก</Link></li>
            <li className="list-inline-item title">/</li>
            <li className="list-inline-item title"><Link className="text-success" to="/order">รายการสั่งซื้อ</Link></li>
            <li className="list-inline-item title">/</li>
            <li className="list-inline-item title"><Link className="text-success" to="/product">จัดการสินค้า</Link></li>
            <li className="list-inline-item title">/</li>
            <li className="list-inline-item title"><Link className="text-success" to="/about">เกี่ยวกับเรา</Link></li>
          </ul>
          <TimerCountDown />
          <div className="float-right">
            <img style={{ height: 50, marginRight: 15 }} src="/images/logo/big_sale.png" alt=''></img>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );

}

