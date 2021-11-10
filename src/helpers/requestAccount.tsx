// request MetaMask Access
export async function requestAccount(): Promise<string[]> {
  if (window.ethereum?.request) {
    const res = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    return res
  }

  throw new Error(
    'Missing install Metamask. Please access https://metamask.io/ to install extension on your browser'
  )
}
