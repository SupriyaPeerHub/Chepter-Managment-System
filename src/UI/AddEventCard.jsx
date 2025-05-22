import plan from "../assets/img/plan.png";

function AddEventCard({ setIsPlanEvent }) {
  return (
    <div className="flex flex-col border border-[#204E68] rounded-sm p-4 justify-center items-center h-56 w-60">
      <img
        src={plan}
        alt=""
        className="h-[90px] w-[90px] cursor-pointer"
        onClick={() => setIsPlanEvent(true)}
      />
      <h3 className="font-Gilroy text-white pt-5">Plan an Event</h3>
    </div>
  );
}

export default AddEventCard;
