import React from 'react';
import { connect } from "react-redux";
import { handleCount } from "../../redux/count";

function Counter(props) {
    let { count, handleCount } = props;
    let r
    return (
        <div>
            <button name="plus" onClick={handleClick}>+</button>
            <h1>Count: {count}</h1>
            <button name="minus" onClick={handleClick}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps, { handleCount })(Counter);