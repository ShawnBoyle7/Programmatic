def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            label = field.split("_")
            for i in range(len(label)):
                label[i] = label[i].capitalize()
            label = " ".join(label)
            errorMessages.append(f'{label} Error: {error}')
    return errorMessages