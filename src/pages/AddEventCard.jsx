import plan from "../assets/img/plan.png";

function AddEventCard({ setIsPlanEvent }) {
  return (
    <div className="flex flex-col border border-[#204E68] rounded-sm p-4 justify-center items-center h-56 w-60">
      <img
        src={plan}
        alt=""
        className="h-[100px] w-[100px] cursor-pointer"
        onClick={() => setIsPlanEvent(true)}
      />
      <h3 className="font-Gilroy text-white">Plan an Event</h3>
    </div>
  );
}

export default AddEventCard;
