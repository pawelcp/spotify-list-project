export interface SearchResponse{
    query: string,
    artists: {
        items: ArtistData[],
        totalCount: number,
        pagingInfo: PagingInfo
    },
}
export interface ArtistData{
    data: Data
}

export interface Source{
    url: string
    height: number
    width: number
}

export interface PagingInfo{
    limit: number,
    nextOffset: null,
}

export interface Data{
    profile: {
        name: string
    },
    uri: string,
    visuals: {
        avatarImage: {
            sources: Source[]
        }
    }
}