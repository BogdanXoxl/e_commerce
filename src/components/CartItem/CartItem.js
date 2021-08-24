import React from "react";
import {connect} from "react-redux";
import parse from "html-react-parser";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

import {adjustQty, removeFromCart} from "../../redux/Shopping/shopping-actions";

import NoImage from "../../assets/no_image.jpg";
import {
    Container, DeleteBtn,
    Description,
    Image,
    IMGContainer,
    InfoContainer,
    Price, Qty,
    Title
} from "./CartItem.styles";
import {IMMUTABLE_TYPES} from "../../redux/Shopping/shopping-types";

const CartItem = ({item, isImmutable,  adjustQty, removeFromCart}) => {

    const increaseCount = () => {
        adjustQty(item.id, item.type, item.qty+1);
    }
    const deleteBtn = (item) => {
        Swal.fire({
            title: 'Вы хотите удалить товар из корзины?',
            showCancelButton: true,
            confirmButtonText: `Да`,
            cancelButtonText: 'Нет'
        }).then((result) => {
            if (result.isConfirmed) {
                removeFromCart(item.id, item.type);
                Swal.fire('Удалено!', '', 'success');
            }
        })
    }


    const decreaseCount = () => {
        if(item.qty > 1)
            adjustQty(item.id, item.type, item.qty-1);
        else
            deleteBtn(item);
    }

  return (
      <Container>
          <IMGContainer>
              <Image src={item.image && item.image.src? item.image.src : NoImage}/>
          </IMGContainer>
        <InfoContainer>
            <Title>
                {!IMMUTABLE_TYPES.includes(item.type)?
                    <Link to={`${item.type}/${item.id}`}>{item.title}</Link>:
                    item.title
                }
            </Title>
            <Price>{item.price} ₽</Price>
            <Description>{item.description? parse(item.description): ''}</Description>

            {!isImmutable &&
            <Qty>
                <span className="down" onClick={decreaseCount}>-</span>
                <input type="text" value={item.qty} readOnly/>
                <span className="up" onClick={increaseCount}>+</span>
            </Qty>
            }

            <DeleteBtn onClick={() => deleteBtn(item)}>
                Удалить <i className="fas fa-trash"></i>
            </DeleteBtn>
        </InfoContainer>
      </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (itemID, typeOfItem, value) => dispatch(adjustQty(itemID, typeOfItem, value)),
        removeFromCart: (itemID, typeOfItem) => dispatch(removeFromCart(itemID, typeOfItem))
    };
};


export default connect(null, mapDispatchToProps)(CartItem);
