import { useParams } from "react-router-dom";

export default function Country() {
  // get the name of the country from the URL
  // use the useParams hook from react-router-dom

  const params = useParams();
  return (
    <div>
      <h1>Country: {params.nomDuPays}</h1>
    </div>
  );
}
