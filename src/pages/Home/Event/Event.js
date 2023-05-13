import React from "react";
import event1 from "./eventImg/event1.jpg";
import event2 from "./eventImg/event2.jpg";
import event3 from "./eventImg/event3.jpg";
export default function Event() {
  let text = "text-gray-400	";
  return (
    <div className="">
      <p className="text-xl my-5 text-center font-medium">SỰ KIỆN ĐIỆN ẢNH</p>
      <div className="container grid grid-cols-3 text-left gap-5">
        <div>
          <div>
            <img src={event1} />
          </div>
          <div>
            <p className="mt-2">April 20, 2023 by Amy BurtonActors</p>
            <p className="text-xl my-2">AWARD CEREMONY</p>
            <p className={text}>
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={event2} />
          </div>
          <div>
            <p className="mt-2">April 20, 2023 by Amy BurtonActors</p>
            <p className="text-xl my-2">HEROES FOR A DAY</p>
            <p className={text}>
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={event3} />
          </div>
          <div>
            <p className="mt-2 ">April 20, 2023 by Amy BurtonActors</p>
            <p className="text-xl my-2">OUTDOOR SHOOTING</p>
            <p className={text}>
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
