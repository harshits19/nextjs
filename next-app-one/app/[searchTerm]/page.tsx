type Props = {
  params: {
    searchTerm: string
  }
}
import useFetchSearch from "@/lib/useFetchSearch"
import SearchCard from "./_components/SearchCard"
import { Metadata } from "next"

export const generateMetadata = async ({ params: { searchTerm } }: Props): Promise<any> => {
  const displayTerm = searchTerm.replaceAll("%20", " ")
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  }
}

const SearchPage = async ({ params: { searchTerm } }: Props) => {
  const resData: Promise<SearchResult> = useFetchSearch(searchTerm)
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
