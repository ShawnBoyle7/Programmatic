
def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            if isinstance(error, list):
                for err in error:
                    errorMessages.append(f'{field} - {err}')
            else:
                errorMessages.append(f'{field} - {error}')
    return errorMessages
