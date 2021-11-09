export function disableButton($event: UIEvent): void
{
    ($event.target as HTMLButtonElement).disabled = true;
}

export function enableButton($event: UIEvent): void
{
    ($event.target as HTMLButtonElement).disabled = false;
}
