import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  @media screen and (max-width: 720px){
    
  }
  
  caption{
    font-size: var(--fontBig);
    text-transform: uppercase;
    margin: 1rem 0;
  }

  table {
    width: 100%;
    border: none;
    margin-bottom: 20px;
  }

  table thead th {
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #d8d8d8;
    font-size: 14px;
  }

  table thead tr th:first-child {
    border-radius: 8px 0 0 8px;
  }

  table thead tr th:last-child {
    border-radius: 0 8px 8px 0;
  }

  table tbody td {
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
  }

  table tbody tr:nth-child(even) {
    background: #f3f3f3;
  }

  table tbody tr td:first-child {
    border-radius: 8px 0 0 8px;
  }

  table tbody tr td:last-child {
    border-radius: 0 8px 8px 0;
  }
`;
