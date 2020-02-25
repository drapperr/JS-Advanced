class Article {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        }
        if (this._likes.length === 1 ) {
            return `${this._likes[0]} likes this article!`;//todo
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;//todo
    }

    like(username) {
        let user = this._likes.find(x => x === username);

        if (user) {
            return "You can't like the same article twice!";
        }

        if (this.creator === username) {
            return "You can't like your own articles!";
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        let user = this._likes.find(x => x === username);

        if (!user) {
            return "You can't dislike this article!";
        }
        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        let comment = this._comments.find(x => x.id === id);

        if (!comment) {
            let newComment = {
                id: this._comments.length + 1,
                username,
                content,
                replies: []
            }
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        }

        comment.replies.push({
            id: Number(`${id}.${comment.replies.length + 1}`),
            username,
            content
        });

        return "You replied successfully";
    }

    toString(sortingType) {
        let result = [];
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this._likes.length}`)
        result.push(`Comments:`)
        if (sortingType === 'asc') {
            let sortedComments = this._comments.sort((a, b) => a.id - b.id);
            sortedComments.forEach(comment => {
                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
                let sortedReplies= comment.replies.sort((a,b)=>a.id-b.id);
                sortedReplies.forEach(reply => {
                    result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                });
            });
        } else if (sortingType === 'desc') {
            let sortedComments = this._comments.sort((a, b) => b.id - a.id);
            sortedComments.forEach(comment => {
                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
                let sortedReplies= comment.replies.sort((a,b)=>b.id-a.id);
                sortedReplies.forEach(reply => {
                    result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                });
            });
        } else if (sortingType == 'username') {
            let sortedComments = this._comments.sort((a, b) => a.username.localeCompare(b.username));
            sortedComments.forEach(comment => {
                result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
                let sortedReplies= comment.replies.sort((a,b)=>a.username.localeCompare(b.username));
                sortedReplies.forEach(reply => {
                    result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                });
            });
        }

        return result.join('\n');
    }
}

let art = new Article("My Article", "Anny");
console.log(art.like("John"));
console.log(art.likes);
console.log(art.dislike("John"));
console.log(art.likes);
console.log(art.comment("Sammy", "Some Content"));
console.log(art.comment("Ammy", "New Content"));
console.log(art.comment("Zane", "Reply", 1));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 1));


