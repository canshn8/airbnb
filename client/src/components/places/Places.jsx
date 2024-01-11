import { useEffect, useState } from "react";
import styled from "styled-components";
import Place from "../place/Place";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Places = ({ cat, filters, sort }) => {

  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/places?category=${cat}`
            : "http://localhost:5000/api/places"
        )
        setPlaces(res.data)
      } catch (err) {

      }
    }
    getPlaces()
  }, [cat])


  useEffect(() => {
    cat && setFilteredPlaces(
      places.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
  }, [places, cat, filters])


  useEffect(() => {
    if (sort === "newest") {
      setFilteredPlaces((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if ((sort === "asc")) {
      setFilteredPlaces((prev) =>
        [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilteredPlaces((prev) =>
        [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])


  return (
    <Container>
      {cat
      ? filteredPlaces.map((item) => <Place item={item} key={item.id} />)
      : places.slice(0.5).map((item) => <Place item={item} key={item.id} />)
      }
    </Container>
  );
};

export default Places;