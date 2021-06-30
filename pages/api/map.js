import axios from "axios";

export default async (req, res) => {
  axios
    .get(
      `https://api.geoapify.com/v1/geocode/search?text=${req.body.address}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`
    )
    .then((result) => res.send(result.data.features[0].geometry.coordinates))
    .catch((error) => console.log(error));
};
