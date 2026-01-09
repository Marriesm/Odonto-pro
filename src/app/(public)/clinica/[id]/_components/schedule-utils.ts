export function isToday(date: Date) {
    const now = new Date();
    return(
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
    )
}

export function isSlotInThePast(slotTime: string) {
   const [hour, minute] = slotTime.split(':').map(Number);
   const now = new Date();
   const currentHour = now.getHours();
   const currentMinute = now.getMinutes();

   if(hour < currentHour) {
        return true;
   }else if (hour === currentHour && minute <= currentMinute) {
        return true;
   }
   return false;
}

export function isSlotSequenceAvailable(
    startStart: string,
    requiredSlots: number,
    allSlots: string[],
    blockedTimes: string[],
    clinicTimes: string[]
){
    const startIndex = allSlots.indexOf(startStart);
    if (startIndex === -1 || startIndex + requiredSlots > allSlots.length) {
        return false;
    }

    for (let i = startIndex; i < startIndex + requiredSlots; i++){
        const SlotTime = allSlots[i];
        if(blockedTimes.includes(SlotTime)){
            return false;
        }
    }
    return true;
}