import { getData } from './request'

export default async (store) => {
  const consName = store.state.consName
  const field = store.state.field
  const data = await getData(consName, field)

  if (data.error_code) {
    store.commit('setErrorCode', data.error_code)
    return
  }

  store.commit('setData', data)
}