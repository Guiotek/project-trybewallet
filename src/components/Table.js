import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItems } from '../redux/actions';

class Table extends Component {
  deleteItem = (id) => {
    const { wallet: { expenses }, dispatch } = this.props;
    const a = expenses.filter((e) => e.id !== id);
    dispatch(deleteItems(a));
  };

  render() {
    console.log(this.props);
    const { wallet: { expenses } } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Tag</td>
              <td>Método de pagamento</td>
              <td>Valor</td>
              <td>Moeda</td>
              <td>Câmbio utilizado</td>
              <td>Valor convertido</td>
              <td>Moeda de conversão</td>
              <td>Editar/Excluir</td>
            </tr>
          </thead>
          {expenses.map((e) => (
            <tbody key={ e.id }>
              <tr>
                <td>{e.description}</td>
                <td>{e.tag}</td>
                <td>{e.method}</td>
                <td>
                  R$:
                  {Number(e.value).toFixed(2)}
                </td>
                <td>{e.exchangeRates[e.currency].name}</td>
                <td>
                  {
                    Number(e.exchangeRates[e.currency].ask).toFixed(2)
                  }
                </td>
                <td>
                  {
                    (Number(e.value) * Number(e.exchangeRates[e.currency].ask)).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.deleteItem(e.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  wallet: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Table);
