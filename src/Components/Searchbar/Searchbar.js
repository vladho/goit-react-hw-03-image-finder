import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from "./Searchbar.module.css"

class Searchbar extends Component {
  state = {
    query: "",
  }

  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.query)
    this.setState({ query: "" })
  }

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>
          <input className={styles.input} autoComplete="off" autoFocus placeholder="Search images and photos" type="text" value={this.state.query} onChange={this.handleChange} />
        </form>
      </header>
    )
  }
}

Searchbar.propTypes = {}

export default Searchbar
