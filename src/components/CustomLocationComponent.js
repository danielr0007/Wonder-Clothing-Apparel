import {
  BsFillHouseDoorFill,
  BsFillTelephoneFill,
  BsClockFill,
  BsFillCalendarEventFill,
} from "react-icons/bs";

const CustomLocationComponent = ({ locationdata }) => {
  return (
    <div>
      {/* Header */}
      <div className="pb-10">
        <div id="image" className="md:w-4/6 w-full md:h-[350px] h-[300px] pb-9">
          <img
            className="object-cover h-full w-full"
            src={locationdata.image}
            alt=""
          />
        </div>

        <h3 className="pb-3 text-3xl font-bold dark:text-white">
          {locationdata.name}
        </h3>
        <p className="dark:text-white">{locationdata.city}</p>
      </div>

      {/* Location info */}
      <div className="pb-12 grid md:grid-cols-3 grid-cols-2 gap-5">
        <LocationCard data={locationdata.floor}>
          <BsFillHouseDoorFill className="mb-3 text-3xl text-l-green dark:text-navy" />
        </LocationCard>
        <LocationCard data={locationdata.phone}>
          <BsFillTelephoneFill className="mb-3 text-3xl text-l-green  dark:text-navy" />
        </LocationCard>
        <LocationCard data={locationdata.hours}>
          <BsClockFill className="mb-3 text-3xl text-l-green  dark:text-navy" />
        </LocationCard>
        <LocationCard data={locationdata.days}>
          <BsFillCalendarEventFill className="mb-3 text-3xl text-l-green  dark:text-navy" />
        </LocationCard>
      </div>

      {/* Map */}
      <div className="pb-10">
        <iframe
          style={{
            width: "100%",
            height: "300px",
            marginBottom: "45px",
          }}
          src={locationdata.map}
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default CustomLocationComponent;

const LocationCard = (props) => {
  return (
    <div className="p-5 bg-white dark:bg-l-grey rounded-lg hover:shadow-lg">
      {props.children}
      <p className="md:text-base text-sm">{props.data}</p>
    </div>
  );
};
