type Props = {
  params: {
    searchTerm: string
  }
}
import getSearchResults from "@/lib/getSearchResults"
import SearchCard from "./_components/SearchCard"

export const generateMetadata = async ({ params: { searchTerm } }: Props): Promise<any> => {
  const resData: Promise<SearchResult> = getSearchResults(searchTerm)
  const data = await resData
  const displayTerm = searchTerm.replaceAll("%20", " ")
  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    }
  }
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  }
}

const SearchPage = async ({ params: { searchTerm } }: Props) => {
  const resData: Promise<SearchResult> = getSearchResults(searchTerm)
  const data = await resData
  const result: Result[] | undefined = data?.query?.pages

  return result ? (
    Object.values(result).map((data) => {
      return <SearchCard key={data.pageid} item={data} />
    })
  ) : (
    <div className="flex justify-center pt-8 text-xl font-semibold">{`No result found for qwery - ${searchTerm.replaceAll("%20", " ")}`}</div>
  )
}
export default SearchPage
