const deleteRow = (Model, pk, pk_val) => {
  return Model.findOne({
    where: {
      [pk]: pk_val,
    },
  }).then((result) => {
    return Model.destroy({ where: { [pk]: pk_val } }).then((u) => {
      return result;
    });
  });
};

module.exports = {
  deleteRow,
};
