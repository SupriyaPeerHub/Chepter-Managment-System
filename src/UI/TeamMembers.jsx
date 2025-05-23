import { ChevronDown } from "lucide-react";

const teamMembers = [
  {
    role: "PRESIDENT",
    name: "Sarthak Sahni",
    email: "sarthak.s@amity.edu",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  // {
  //   role: "TREASURER",
  //   name: "Akshi Khanna",
  //   email: "akshi.k@amity.edu",
  //   image:
  //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  // },
  // {
  //   role: "EVENT COORDINATOR",
  //   name: "Mehul Prajapati",
  //   email: "mehul.p@amity.edu",
  //   image:
  //     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  // },
  {
    role: "MARKETING OUTREACH",
    name: "Tanya Jain",
    email: "tanyajain.s@amity.edu",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    role: "COM. ENGAGEMENT LEAD",
    name: "Kabir Arora",
    email: "kabirarora.s@amity.edu",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    role: "FACULTY",
    name: "Sarthak Sahni",
    email: "sarthak.s@amity.edu",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const TeamMembers = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" border border-[#204E68] rounded-md p-4 flex flex-col items-center"
          >
            <div className="text-xs font-Gilroy-SemiBold text-[#F15C22] mb-2">
              {member.role}
            </div>
            <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-white">
                Name: {member.name}
              </div>
              <div className="text-xs text-gray-400">Email: {member.email}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button className="flex items-center text-gray-400 hover:text-white text-sm">
          View all members
          <ChevronDown size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default TeamMembers;
