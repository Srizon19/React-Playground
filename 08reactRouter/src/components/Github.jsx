import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [followers, setFollowers] = useState(0);
  //   const [avatar, setAvatar] = useState("");
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Srizon19")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setFollowers(data.followers);
  //         setAvatar(data.avatar_url);
  //       });
  //   }, []);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center text-2xl bg-green-200 font-bold text-center p-4 min-h-[60vh]">
      <h1 className="py-4">Github Followers: {data.followers}</h1>
      <img
        src={data.avatar_url}
        alt="Github Avatar"
        className="w-48 h-48 rounded-full"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Srizon19");
  return response.json();
};
