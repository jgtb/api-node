const onGetSuccess = ({ plural, type }) => `${plural} carregad${type}s com sucesso`
const onGetError = ({ plural }) => `Não foi possível carregar os ${plural}`
const onGetByIdSuccess = ({ single, type }) => `${single} carregad${type} com sucesso`
const onGetByIdError = ({ single, type }) => `Não foi possível carregar ${type} ${single}`
const onPostSuccess = ({ single, type }) => `${single} cadastrad${type} com sucesso`
const onPostError = ({ single, type }) => `Não foi possível cadastrar ${type} ${single}`
const onPatchSuccess = ({ single, type }) => `${single} atualizad${type} com sucesso`
const onPatchError = ({ single, type }) => `Não foi possível atualizar ${type} ${single}`
const onDeleteSuccess = ({ single, type }) => `${single} excluíd${type} com sucesso`
const onDeleteError = ({ single, type }) => `Não foi possível excluír ${type} ${single}`
const onActivateDeactivateSuccess = () => `Situação atualizada com sucesso`
const onActivateDeactivateError = () => `Não foi possível atualizar esta Situação`

export {
  onGetSuccess,
  onGetError,
  onGetByIdSuccess,
  onGetByIdError,
  onPostSuccess,
  onPostError,
  onPatchSuccess,
  onPatchError,
  onDeleteSuccess,
  onDeleteError,
  onActivateDeactivateSuccess,
  onActivateDeactivateError
}
