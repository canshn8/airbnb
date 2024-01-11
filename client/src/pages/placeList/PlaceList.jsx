import { useLocation } from "react-router-dom";
import Places from "../../components/places/Places";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const PlaceList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value
    }) 
  } 

  return (
    <Container>
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Ürün Filtreleme:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Renkler
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >
              Bedenler
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtrele:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">En Yeni</Option>
            <Option value="asc">Fiyat (Artan)</Option>
            <Option value="desc">Fiyat (Azalan)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Places cat={cat} filters={filters} sort={sort}/>
      <Footer />
    </Container>
  );
};

export default PlaceList;