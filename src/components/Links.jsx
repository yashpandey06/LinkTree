/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Links = ({ links }) => {
  console.log(links);
  return (
    <div className="flex flex-col gap-3 -mt-8 px-8 items-center">
      {links.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-gray-800  duration-200 hover:scale-105 border border--slate-50 flex flex-row justify-around items-center rounded-full p-2 max-w-md w-full"
          >
            <div>{item.img}</div>
            <h2><a target="blank" href={item.link}>{item.name}</a></h2>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
