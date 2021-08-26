import React, {useEffect} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import PriceItem from "../../components/PriceItem";
import {loadPrices} from "../../redux/Shopping/shopping-actions";
import {Container, SideBar, Prices, FlexContainer} from "./PricePage.styles";
import Loading from "../../components/Loading";

const PricePage = ({prices, isFetching, loadPrices, ...props}) => {

    useEffect(() => {
        window.scroll(0,0);
        loadPrices();
    }, [loadPrices]);

    useEffect(() => {
        const hash = props.history.location.hash;
        // Check if there is a hash and if an element with that id exists
        const el = hash && document.getElementById(hash.substr(1));
        if (el) {
            el.scrollIntoView({behavior: "smooth", block: "center"});
        }
    }, [props.history.location.hash])

    return (
        <>
            {isFetching ?
                <Loading/>
                :
                <Container>
                    <h2>Наши цены</h2>
                    <FlexContainer>
                        <SideBar>
                            <ul>
                                <li className="title">Меню</li>
                                {prices ? prices.map((price, i) => (
                                    <Link to={`#${price.title}`} key={i}>
                                        <li>{price.title}</li>
                                    </Link>
                                )) : ""}

                            </ul>
                        </SideBar>

                        <Prices>
                            {
                                prices ?
                                    prices.map((price) => (
                                        <PriceItem item={price} key={price.title}/>
                                    )) :
                                    ""
                            }
                        </Prices>
                    </FlexContainer>

                </Container>
            }
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPrices: () => dispatch(loadPrices()),
    };
};

const mapStateToProps = (state) => {
    return {
        prices: state.shop.prices,
        isFetching: state.shop.isFetching
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PricePage));