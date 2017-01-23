'use strict';

/**
 * Dependencies
 */

var React = require('react');


/**
 * Floating label text input
 */

var Input = React.createClass({
  getInitialState: function () {
    return {
      isActive: false
    };
  },

  onChange: function (e) {
    var value = e.target.value;

    this.setState({
      isActive: value.length > 0
    });

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  },

  getInitialClasses: function () {
    var classes = [
      'floating-label-input'
    ];

    var userClasses = this.props.className || '';

    userClasses.split(' ').forEach(function (name) {
      classes.push(name);
    });

    return classes;
  },

  render: function () {
    var type = this.props.type || 'text';

    var classes = this.getInitialClasses();

    var inputProps = {};
    if (typeof this.props.value === 'string') {
      // make input controlled
      inputProps['value'] = this.props.value;
    }

    if (this.state.isActive) {
      classes.push('is-active');
    }

    return <div className={ classes.join(' ') }>
      <label>{ this.props.label }</label>
      <input type={ type } placeholder={ this.props.label } onChange={ this.onChange } {...inputProps} />
    </div>;
  }
});

Input.propTypes = {
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  className: React.PropTypes.className,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string,
}


/**
 * Expose component
 */

if (module && module.exports) {
  module.exports = Input;
}
