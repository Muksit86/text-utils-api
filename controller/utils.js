export const checkWordCount = (req, res) => {
    try {
        const text = req.body.text
        if(text === "") return res.status(400).json({message:"failed", message:"No text found"})
        const trimmedText = text.trim()
        const counts = trimmedText.split(/\s+/).length
        return res.status(200).json({
            status: "success",
            message: "The word count is: ",
            result:counts
        })

    } catch (error) {
        res.status(500).json("There seems to be an error in counting the words", {Error:error})
    }
}

export const Lowercase = (req, res) => {
    try {
        const text = req.body.text
        if(text === "") return res.status(400).json({message:"failed", message:"No text found"})
        const lowercaseText = text.toLowerCase()
        return res.status(200).json({
            status: "success",
            message: "The text is in lowercase",
            result:lowercaseText
        })

    } catch (error) {
        res.status(500).json("There seems to be an error in converting into lowercase", {Error:error})
    }
}

export const removeWhitespace = (req, res) => {
    try {
        const text = req.body.text
        if(text === "") return res.status(400).json({message:"failed", message:"No text found"})
        const trimmedText = text.replace(/\s+/g, ' ').trim();
        return res.status(200).json({
            status: "success",
            message:"The text is trimmed",
            result:trimmedText
        })

    } catch (error) {
        res.status(500).json("There seems to be an error in removing the spaces", {Error:error})
    }
}

export const Uppercase = (req, res) => {
    try {
        const text = req.body.text
        if(text === "") return res.status(400).json({message:"failed", message:"No text found"})
        const uppercaseText = text.toUpperCase()
        return res.status(200).json({
        status:"success",
        message:"The text is in lower case",  
        result:uppercaseText
    })

    } catch (error) {
        res.status(500).json("There seems to be an error in converting into uppercase", {Error:error})
    }
}