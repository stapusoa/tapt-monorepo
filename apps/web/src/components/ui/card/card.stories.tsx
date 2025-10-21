import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./card"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  args: {
    title: "Common Crafts",
    location: "San Diego, CA",
    description: "Bright, spacious layout with upgraded finishes and a private balcony.",
    price: 2600,
    image: "https://cdn.photos.sparkplatform.com/pbb/20240207171037326298000000-o.jpg",
    badge: "youth",
    tags: ["Pet Friendly", "Washer/Dryer", "Pool"],
    orientation: "vertical",
    imagePosition: "inline",
    size: "md",
    variant: "filled",
    color: "primary",
    alignH: "left",
    alignV: "top",
    avatarTag: {
      image: "https://placehold.co/40x40/000/fff",
      name: "John Doe"
    },
    onClick: () => alert("Card clicked"),
    onAddToCart: () => alert("Add to cart clicked"),
  },
  argTypes: {
    badge: {
      control: "select",
      options: ["apartment", "condo", "house", "townhome"],
    },
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
    },
    imagePosition: {
      control: "inline-radio",
      options: ["inline", "background"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "radio",
      options: ["filled", "outlined", "ghost"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "contrast", "neutral", "promo", "critical"],
    },
    alignH: {
      control: "inline-radio",
      options: ["left", "center", "right"],
    },
    alignV: {
      control: "inline-radio",
      options: ["top", "center", "bottom"],
    },
  },
}
export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {}

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
    imagePosition: "inline",
  },
}

export const WithBackgroundImage: Story = {
  args: {
    imagePosition: "background",
    color: "primary",
    variant: "filled",
  },
}

export const GhostVariant: Story = {
  args: {
    variant: "ghost",
    color: "primary",
  },
}

export const PromoCard: Story = {
  args: {
    title: "Limited Time Offer!",
    description: "Save $500 on your first month’s rent.",
    image: "https://placehold.co/400x300/ff0/000",
    color: "secondary",
    badge: "apartment",
    tags: ["Special", "Limited Time"],
  },
}