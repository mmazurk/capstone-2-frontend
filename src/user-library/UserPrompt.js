
function UserPrompt({date, promptText}) {

    return (
        <>
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>
          <strong>{date}:</strong>&nbsp;{promptText}
        </span>
        <div>
          <button class="btn btn-outline-primary btn-sm mr-2">
            Favorite
          </button>
          <button class="btn btn-outline-danger btn-sm">
            Delete
          </button>
        </div>
      </li>
      </>
    )
}

export default UserPrompt;