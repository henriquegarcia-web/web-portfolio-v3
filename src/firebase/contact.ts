import { database, ref, push, onValue, off } from '@/firebase/firebase'
import { toaster } from 'evergreen-ui'

// =================================================== CREATE ADMIN ACCOUNT

interface IContact {
  contactName: string
  contactPhone: string
  contactMessage: string
}

const submitContact = async ({
  contactName,
  contactPhone,
  contactMessage
}: IContact): Promise<boolean> => {
  try {
    const contactData = {
      contactName,
      contactPhone,
      contactMessage,
      contactAt: Date.now()
    }

    await push(ref(database, 'contacts'), contactData)

    return true
  } catch (error) {
    return false
  }
}

// =================================================== GET ADMIN ACCOUNTS

const getContacts = (callback: any) => {
  const contactsRef = ref(database, 'contacts')

  const listener = (snapshot: any) => {
    try {
      const contacts: IContact[] = []

      snapshot.forEach((contactSnapshot: any) => {
        const contactId = contactSnapshot.key
        const contactData = contactSnapshot.val()
        const account = { contactId, ...contactData }
        contacts.push(account)
      })

      callback(contacts)
    } catch (error) {
      console.error('Erro ao obter lista de contatos:', error)
    }
  }

  onValue(contactsRef, listener)

  return () => {
    off(contactsRef, 'value', listener)
  }
}

export { submitContact, getContacts }
