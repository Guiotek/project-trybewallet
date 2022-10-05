import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RequestApi, RequestApiOnClick } from '../redux/actions';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  state = {
    valor: '',
    descrição: '',
    moeda: 'USD',
    metodo: 'Dinheiro',
    categoria: 'alimentação',
    id: -1,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(RequestApi());
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onClickButton = () => {
    const { valor, descrição, moeda, metodo, categoria, id } = this.state;
    const { dispatch } = this.props;
    const obj = {
      id: id + 1,
      value: valor,
      description: descrição,
      currency: moeda,
      method: metodo,
      tag: categoria,
    };
    this.setState({
      id: obj.id,
    });
    dispatch(RequestApiOnClick(obj));
    this.setState({
      valor: '',
      descrição: '',
      moeda: 'USD',
      metodo: 'Dinheiro',
      categoria: 'alimentação',
    });
  };

  render() {
    const { wallet: { currencies, loading } } = this.props;
    const { valor, descrição, moeda, metodo, categoria } = this.state;
    return (
      <div>
        <Header />
        {

          loading ? <p>carregando</p> : (
            <div>
              <label htmlFor="valor">
                Valor:
                <input
                  type="number"
                  data-testid="value-input"
                  id="valor"
                  name="valor"
                  onChange={ this.onInputChange }
                  value={ valor }
                />
              </label>
              <label htmlFor="description">
                Descrição:
                <input
                  type="text"
                  data-testid="description-input"
                  id="description"
                  name="descrição"
                  onChange={ this.onInputChange }
                  value={ descrição }
                />
              </label>
              <label htmlFor="selectOne">
                Moeda:
                <select
                  id="selectOne"
                  data-testid="currency-input"
                  name="moeda"
                  onChange={ this.onInputChange }
                  value={ moeda }
                >
                  {currencies.map((e, i) => (
                    <option key={ i }>{e}</option>
                  ))}
                </select>
              </label>
              Metodo De Pagamento:
              <label htmlFor="selectTwo">
                <select
                  id="select"
                  data-testid="method-input"
                  name="metodo"
                  onChange={ this.onInputChange }
                  value={ metodo }
                >
                  <option>Dinheiro</option>
                  <option>Cartão de crédito</option>
                  <option>Cartão de débito</option>
                </select>
              </label>
              <label htmlFor="selectThree">
                categoria:
                <select
                  id="selectThree"
                  data-testid="tag-input"
                  name="categoria"
                  onChange={ this.onInputChange }
                  value={ categoria }
                >
                  <option>Alimentação</option>
                  <option>Lazer</option>
                  <option>Trabalho</option>
                  <option>Transporte</option>
                  <option>Saúde</option>

                </select>
              </label>
              <button
                type="button"
                onClick={ this.onClickButton }
              >
                Adicionar despesa
              </button>
              <Table />
            </div>
          )
        }
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Wallet);
