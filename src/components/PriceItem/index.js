import React from "react";
import {Container} from "./PriceItem.styles";


const PriceItem = ({item}) => {
    return  (
        <Container>
            <table id={item.title}>
                <caption>{item.title}</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Размер</th>
                        <th>Стоимость Бруса</th>
                        <th>Стоимость Установки</th>
                    </tr>
                </thead>
                <tbody>
                    {item.goods? item.goods.map((i, index) => (
                        <tr key={index+i.size}>
                            <td>{index + 1}</td>
                            <td>{i.size}</td>
                            <td>{i.price}</td>
                            <td>{i.price_installation}</td>
                        </tr>
                    )): ""}

                </tbody>
            </table>

        </Container>
    );
};

export default PriceItem;