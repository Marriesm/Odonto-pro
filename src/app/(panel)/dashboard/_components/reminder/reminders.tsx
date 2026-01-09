import { getReminders} from '../../_data-access/get-reminders'
import { ReminderList} from './reminder-list'


export async function Reminders({ userId}: {userId: string}){

    const reminders = await getReminders({userId: userId})
    console.log(reminders)
    return (
        <div>
            <h1>
                <ReminderList reminder={reminders}/>
            </h1>
        </div>
    )
}