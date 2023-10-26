import Link from "next/link"
type Props = {
  item: Result
}
function SearchCard({ item }: Props) {
  return (
    <div className="flex gap-x-4 p-4 m-4">
      {item?.thumbnail && <img src={item.thumbnail.source} className="h-16 w-16" alt={item?.title + "Image"} loading="lazy" />}
      <div className="flex flex-col gap-y-2">
        <div className="text-xl font-medium">
          <Link href={`https://en.wikipedia.org/?curid=${item.pageid}`} target="_blank" className="text-xl font-bold underline">
            {item?.title}
          </Link>
        </div>
        <div className="text-sm text-gray-800">{item?.extract}</div>
      </div>
    </div>
  )
}
export default SearchCard
